/**
 * this js file contain the all function which is related to the share concept .
 *  In which myShareAllCases, myShareCasesDateWise  , share app .
 * 
 *
 */



$(document).on("click", "#shareL", function () {
    var n = $('#dateDropDown option:selected').val();
    var txt = $("#dateDropDown option:selected").text();
    if(n.toLowerCase()!=='all'){
        myShareCasesDateWise(txt,'', '', '', n);
        trigger_menu();
    }
    else{
        try {
        var selectedDat = $("#searchInfoDiv").html();
        var dateToShare = selectedDat.split(':');
        if(dateToShare.length>1){
            if(typeof dateToShare[1] != 'undefined'){
                if(dateToShare[1].indexOf(',') !== -1){
                    dateToShare = dateToShare[1].replace(',', ' ');
                }   
                dateToShare = dateToShare.trim();
                var dateRanges;
                var startDate = '';
                var endDate = '';
                var searchString = '';
                var pattern = /^201[1-9]\-(1[0-2]|0[1-9])\-(3[01]|[12][0-9]|0[1-9])$/;
                if (dateToShare.indexOf(',') !== -1) {
                    dateRanges = dateToShare.split(',');
                    if (dateRanges.length > 0) {
                        if (dateRanges[0] !== 'undefined') {
                            if (pattern.test(dateRanges[0].trim())) {
                                startDate = dateRanges[0].trim();
                            }
                            else {
                                searchString = dateRanges[0].trim();
                            }
                        }
                        else {
                            if (pattern.test(dateToShare)) {
                                startDate = dateToShare;
                            }
                            else {
                                searchString = dateToShare;
                            }
                        }

                        if (dateRanges[1] !== 'undefined') {
                            if (pattern.test(dateRanges[1].trim())) {
                                endDate = dateRanges[1].trim();
                            }
                            else {
                                if (searchString != '') {
                                    searchString = searchString + ',' + dateRanges[1].trim();
                                }
                            }
                        }
                        else {
                            endDate = '';
                        }
                    }
                }
                else {
                    if (pattern.test(dateToShare)) {
                        startDate = dateToShare;
                    }
                    else {
                        searchString = dateToShare;
                    }
                }
                var txt = 'Showing Cases For: ';
                if (endDate != 'undefined' && endDate != '') {
                    if (pattern.test(startDate)) {
                        txt = txt + startDate + " To " + endDate;
                    }
                    else {
                        txt = txt + dateToShare;
                    }
                }
                else {
                    if (pattern.test(startDate)) {
                        txt = txt + startDate;
                    }
                    else {
                        txt = txt + dateToShare;
                    }
                }
                var shareData = {
                    'subject': txt,
                    'startDate': dateToShare
                };
                localStorage.setItem('shareData', JSON.stringify(shareData));
                myShareCasesDateWise(txt, searchString, startDate, endDate, '');
                trigger_menu();
            }
        }
    }
    catch (err) {
        var errMsg = err + "\nMethod: #shareALL(jquery) " + "\nError Stack:" + err.stack; 
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
    }
});

function myShareAllCases(listCourtDateId, subject) {
    try {
        $.mobile.loading('show', {
            text: 'Loading...',
            textVisible: true,
            theme: 'b',
            textonly: false
        });
        db.transaction(
function (tx) {
    var searchData = JSON.parse(localStorage.getItem("searchData"));
    var searchString = searchData.searchString;
    if(typeof searchString !== 'undefined' &&  searchString !== ''){
        searchString = searchString.replace(/\s/g,'');
    }
    var query = 'select * from justice_table '
    + 'join case_justice_table on case_justice_table.justice_id=justice_table.justice_id '
    + 'join case_table on case_table.case_id=case_justice_table.case_id '
    + 'where case_justice_table.case_id IN  '
    + '(select distinct case_table.case_id '
    + 'from case_table '
    + 'join case_justice_table on case_table.case_id=case_justice_table.case_id '
    + 'join justice_table on justice_table.justice_id=case_justice_table.justice_id '
    + 'join list_court_date_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id '
    + 'join court_date_table on list_court_date_table.court_date_id=court_date_table.court_date_id '
    + 'join list_table on list_table.list_id=list_court_date_table.list_id  WHERE 1=1 '
    if (typeof searchString !== 'undefined') {
        query += " AND ((CASE WHEN end_date='' THEN start_date='"
        + searchString
        + "' ELSE '"
		+ searchString
		+ "' BETWEEN start_date AND end_date END)  or (REPLACE(justice_table.justice_name,' ','') like '%"
		+ searchString
		+ "%') or (REPLACE(case_justice_table.court_no,' ','') like '%"
		+ searchString + "%') "
		+ " or (REPLACE(list_table.list_name,' ','') like '%" + searchString
		+ "%') " + " or (REPLACE(case_table.matter,' ','') like '%" + searchString
		+ "%' or REPLACE(case_table.list_no,' ','') like '%" + searchString
		+ "%' or REPLACE(case_table.party_name,' ','') like '%" + searchString
		+ "%' or REPLACE(case_table.case_no,' ','') like '%" + searchString
		+ "%')) ";
    }
    query += ' AND list_court_date_table.list_court_date_id=?  order by case_table.case_id)';
    tx.executeSql(query, [listCourtDateId],
        function (tx, result) {
            try {
                var len = result.rows.length;
                var i = 0;
                var caseData = [];
                var justiceNameArray = [];
                var arrayCaseId = [];
                var justiceName;
                var lastJusticeName;
                var max_store_time = 0;
                var min_store_time = 0;
                while (i < len) {
                    if ($.inArray(result.rows.item(i).case_id, arrayCaseId) == -1) {
                        lastJusticeName = result.rows.item(i).justice_name;
                        if ($.inArray(result.rows.item(i).justice_name, justiceNameArray) == -1) {
                            justiceNameArray[justiceNameArray.length] = result.rows.item(i).justice_name;
                        }
                        justiceName = result.rows.item(i).justice_name;
                    }
                    else {
                        var name = lastJusticeName + ',' + result.rows.item(i).justice_name;
                        if ($.inArray(name, justiceNameArray) == -1) {
                            justiceNameArray[justiceNameArray.length - 1] = name;
                        }
                        else {
                            justiceNameArray.pop();
                        }
                        justiceName = name;
                        caseData[caseData.length - 1].justice_name = name;
                    }
                    caseData[caseData.length] = { 'case_id': result.rows.item(i).case_id, 'case_no': result.rows.item(i).case_no, 'list_no': result.rows.item(i).list_no, 'matter': result.rows.item(i).matter, 'party_name': result.rows.item(i).party_name, 'justice_name': justiceName, 'court_no': result.rows.item(i).court_no, 'suspected': result.rows.item(i).suspected, 'store_time': result.rows.item(i).store_time };
                    arrayCaseId.push(result.rows.item(i).case_id);
                    if (result.rows.item(i).store_time > max_store_time) {
                        max_store_time = result.rows.item(i).store_time;
                    }
                    if (min_store_time == 0) {
                        min_store_time = result.rows.item(i).store_time;
                    }
                    if (result.rows.item(i).store_time < min_store_time) {
                        min_store_time = result.rows.item(i).store_time;
                    }
                    i++;
                }
                if (max_store_time == min_store_time) {
                    max_store_time = 0;
                }
                i = 0;
                var j = 0;
                var data = '';
                var courtNo = false;
                var footer = false;
                var caseId = 0;
                while (i < justiceNameArray.length) {
                    j = 0;
                    courtNo = false;
                    footer = false;
                    caseId = 0;
                    while (j < caseData.length) {
                        if (caseData[j].justice_name == justiceNameArray[i] && caseId != caseData[j].case_id) {
                            if (!courtNo) {
                                data = '\n' + data + justiceNameArray[i] + '\n\n';
                                data = data + caseData[j].court_no + '\n';
                                courtNo = true;
                            }
                            if (caseData[j].store_time == max_store_time) {
                                data = data + '#Updated Case#';
                            }
                            if (caseData[j].suspected == 'Y') {
                                data = data + '#Suspected Case#';
                            }
                            data = '\n' + data + caseData[j].list_no + '. ' + caseData[j].case_no + '\n';
                            data = '\n' + data + caseData[j].matter + '\n';
                            data = '\n' + data + caseData[j].party_name + '\n\n';
                        }
                        caseId = caseData[j].case_id;
                        j++;
                    }
                    i++;
                }
                if (len == 0) {
                    data = 'No Listing For This Date And List.';
                }
                $.mobile.loading('hide');
        if(device.platform=='android' || device.platform=='Android')
        {
            data = data + "Generated using the SCS app check it out here - https://play.google.com/store/apps/details?id=com.mrsoft.pg.scs";
        }
        if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios')
        {
            data = data + "Generated using the SCS app check it out here - https://itunes.apple.com/in/app/scs-high-court-causelist/id838890348?mt=8";
        }
                

                var success = function () { };
                var error = function (message) { drawToast("Oops! " + message); };

                 if(device.platform=='android' || device.platform=='Android')
                 {
                      Share.createEvent(subject, data, success, error);
                 }
                 if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios')
                 {
                      window.plugins.socialsharing.share(data,subject); 
                 }
               
              
            }
            catch (err) {
                var errMsg = err + "\nMethod: myShareAllCases(jquery)" + "\nError Stack:" + err.stack; 
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
            }

        }, function (err) { $.mobile.loading('hide'); var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: myShareAllCases(executeSql)"; insertErrorLogs(errMsg, function (id) { alert("Oops! Something went worng with db.") }); });
}, function (err) { $.mobile.loading('hide'); var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: myShareAllCases(transaction)"; insertErrorLogs(errMsg, function (id) { alert("Oops! Something went worng with db.") }); }, successCB);
    }
    catch (err) {
        var errMsg = err + "\nMethod: myShareAllCases12(jquery)" + "\nError Stack:" + err.stack; 
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
}


$(document).on("click", "#shareD", function () {
    try {
        var selectedDat = $("#searchInfoDiv").html();
        var dateToShare = selectedDat.split(':');
        if(dateToShare.length>1){
            if(typeof dateToShare[1] != 'undefined'){
                if(dateToShare[1].indexOf(',') !== -1){
                    dateToShare = dateToShare[1].replace(',', ' ');
                }   
                dateToShare = dateToShare.trim();
                var dateRanges;
                var startDate = '';
                var endDate = '';
                var searchString = '';
                var pattern = /^201[1-9]\-(1[0-2]|0[1-9])\-(3[01]|[12][0-9]|0[1-9])$/;
                if (dateToShare.indexOf(',') !== -1) {
                    dateRanges = dateToShare.split(',');
                    if (dateRanges.length > 0) {
                        if (dateRanges[0] !== 'undefined') {
                            if (pattern.test(dateRanges[0].trim())) {
                                startDate = dateRanges[0].trim();
                            }
                            else {
                                searchString = dateRanges[0].trim();
                            }
                        }
                        else {
                            if (pattern.test(dateToShare)) {
                                startDate = dateToShare;
                            }
                            else {
                                searchString = dateToShare;
                            }
                        }

                        if (dateRanges[1] !== 'undefined') {
                            if (pattern.test(dateRanges[1].trim())) {
                                endDate = dateRanges[1].trim();
                            }
                            else {
                                if (searchString != '') {
                                    searchString = searchString + ',' + dateRanges[1].trim();
                                }
                            }
                        }
                        else {
                            endDate = '';
                        }
                    }
                }
                else {
                    if (pattern.test(dateToShare)) {
                        startDate = dateToShare;
                    }
                    else {
                        searchString = dateToShare;
                    }
                }
                var txt = 'Showing Cases For: ';
                if (endDate != 'undefined' && endDate != '') {
                    if (pattern.test(startDate)) {
                        txt = txt + startDate + " To " + endDate;
                    }
                    else {
                        txt = txt + dateToShare;
                    }
                }
                else {
                    if (pattern.test(startDate)) {
                        txt = txt + startDate;
                    }
                    else {
                        txt = txt + dateToShare;
                    }
                }
                var shareData = {
                    'subject': txt,
                    'startDate': dateToShare
                };
                localStorage.setItem('shareData', JSON.stringify(shareData));
                myShareCasesDateWise(txt, searchString, startDate, endDate, '');
                trigger_menu();
            }
        }
        else{
            drawToast("Please select any date from side panel.");
        }
                
    }
    catch (err) {
        var errMsg = err + "\nMethod: #shareD(jquery)" + "\nError Stack:" + err.stack; 
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
    }
});

function myShareCasesDateWise(subject, searchString, startDate, endDate, listcourtDateID) {
try{
    $.mobile.loading('show', {
        text: 'Loading...',
        textVisible: true,
        theme: 'b',
        textonly: false
    });
    db.transaction(function (tx) {
        if(typeof searchString !== 'undefined' &&  searchString !== ''){
            searchString = searchString.replace(/\s/g,'');
        }
        var query = "select DISTINCT start_date,end_date,list_court_date_table.list_court_date_id,('List-' || list_name) as list_name," +
                    "case_count,judge_name,court_no,list_no,case_no,case_table.case_id,matter,party_name,suspected,store_time," +
                    "(CASE WHEN end_date='' THEN (start_date || ' List-' || list_name || ' (' || case_count || ' Case) ') ELSE " +
                    " (start_date || ' To ' || end_date || ' List-' || list_name || ' (' || case_count || ' Case) ') END) as lst_nm " +
                    "from court_date_table join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id " +
                    "join list_table on list_court_date_table.list_id=list_table.list_ID " +
                    "join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id " +
                    "join (select court_date_table.court_date_id as cdi,list_table.list_id,count(DISTINCT case_table.case_id) as case_count from court_date_table " +
                    "join list_court_date_table on court_date_table.court_date_id=list_court_date_table.court_date_id " +
                    "join list_table on list_court_date_table.list_id=list_table.list_ID " +
                    "join case_table on list_court_date_table.list_court_date_id=case_table.list_court_date_id " +
                    "join case_justice_table on case_table.case_id=case_justice_table.case_id  " +
                    "join justice_table on justice_table.justice_id=case_justice_table.justice_id " +
                    "where 1=1  ";
        if (typeof startDate !== 'undefined' && startDate.trim() !== '') {
            if (typeof endDate !== 'undefined' && endDate.trim() !== '') {
                query += "And (CASE WHEN end_date='' THEN start_date BETWEEN '"
							+ startDate
							+ "' and '"
							+ endDate
							+ "' ELSE start_date BETWEEN '"
							+ startDate
							+ "' AND '"
							+ endDate
							+ "' OR end_date BETWEEN '"
							+ startDate + "' AND '" + endDate + "' END) ";
            }
            else {
                query += "And (CASE WHEN end_date='' THEN start_date='"
							+ startDate
							+ "' ELSE '"
							+ startDate
							+ "' BETWEEN start_date AND end_date END) ";
            }
        }
        if (typeof listcourtDateID !== 'undefined' && listcourtDateID.trim() !== '') {
            query += " And list_court_date_table.list_court_date_id=" + Number(listcourtDateID);
        }
        if (typeof searchString !== 'undefined') {
            if (searchString.trim() !== '') {
                query += " AND ((CASE WHEN end_date='' THEN start_date='"
        + searchString
        + "' ELSE '"
		+ searchString
		+ "' BETWEEN start_date AND end_date END)  or (REPLACE(justice_table.justice_name,' ','') like '%"
		+ searchString
		+ "%') or (REPLACE(case_justice_table.court_no,' ','') like '%"
		+ searchString + "%') "
		+ " or (REPLACE(list_table.list_name,' ','') like '%" + searchString
		+ "%') " + " or (REPLACE(case_table.matter,' ','') like '%" + searchString
		+ "%' or REPLACE(case_table.list_no,' ','') like '%" + searchString
		+ "%' or REPLACE(case_table.party_name,' ','') like '%" + searchString
		+ "%' or REPLACE(case_table.case_no,' ','') like '%" + searchString
		+ "%')) ";
            }
        }
        query += '  group by list_court_date_table.list_court_date_id) as count_list_cases on list_table.list_id=count_list_cases.list_id AND       court_date_table.court_date_id=count_list_cases.cdi ' +
                 'join (select DISTINCT justice_table.justice_id,case_justice_table.case_id,Group_Concat(justice_name) as judge_name,court_no ' +
                 'from case_justice_table join justice_table on case_justice_table.justice_id=justice_table.justice_id ' +
                 'group by case_justice_table.case_id) as justice_names on case_table.case_id=justice_names.case_id where 1=1  ';

        if (typeof startDate !== 'undefined' && startDate.trim() !== '') {
            if (typeof endDate !== 'undefined' && endDate.trim() !== '') {
                query += "And (CASE WHEN end_date='' THEN start_date BETWEEN '"
							+ startDate
							+ "' and '"
							+ endDate
							+ "' ELSE start_date BETWEEN '"
							+ startDate
							+ "' AND '"
							+ endDate
							+ "' OR end_date BETWEEN '"
							+ startDate + "' AND '" + endDate + "' END) ";
            }
            else {
                query += "And (CASE WHEN end_date='' THEN start_date='"
							+ startDate
							+ "' ELSE '"
							+ startDate
							+ "' BETWEEN start_date AND end_date END) ";
            }
        }

        if (typeof listcourtDateID !== 'undefined' && listcourtDateID.trim() !== '') {
            query += " And list_court_date_table.list_court_date_id=" + Number(listcourtDateID);
        }
        if (typeof searchString !== 'undefined') {
            if (searchString.trim() !== '') {
                query += " AND ((CASE WHEN end_date='' THEN start_date='"
        + searchString
        + "' ELSE '"
		+ searchString
		+ "' BETWEEN start_date AND end_date END)  or (REPLACE(justice_names.judge_name,' ','') like '%"
		+ searchString
		+ "%') or (REPLACE(justice_names.court_no,' ','') like '%"
		+ searchString + "%') "
		+ " or (REPLACE(list_table.list_name,' ','') like '%" + searchString
		+ "%') " + " or (REPLACE(case_table.matter,' ','') like '%" + searchString
		+ "%' or REPLACE(case_table.list_no,' ','') like '%" + searchString
		+ "%' or REPLACE(case_table.party_name,' ','')like '%" + searchString
		+ "%' or REPLACE(case_table.case_no,' ','') like '%" + searchString
		+ "%')) ";
            }
        }
        query += ' order by case_count DESC,case_table.case_id;';
        tx.executeSql(query, [], function (tx, result) {
            try {
                var len = result.rows.length;
                var i = 0;
                var caseData = [];
                var justiceNameArray = [];
                var listNameArray = [];
                var arrayCaseId = [];
                var justiceName;
                var listName;
                var lastJusticeName;
                var lastListName;
                var max_store_time = 0;
                var min_store_time = 0;
                var listNameArray = [];
                while (i < len) {
                    if ($.inArray(result.rows.item(i).case_id, arrayCaseId) == -1) {
                        lastListName = result.rows.item(i).lst_nm;
                        if ($.inArray(result.rows.item(i).lst_nm, listNameArray) == -1) {
                            listNameArray[listNameArray.length] = result.rows.item(i).lst_nm;
                        }
                        listName = result.rows.item(i).lst_nm;
                    }
                    else {
                        var name = lastListName + ',' + result.rows.item(i).lst_nm;
                        if ($.inArray(name, listNameArray) == -1) {
                            listNameArray[listNameArray.length - 1] = name;
                        }
                        else {
                            listNameArray.pop();
                        }
                        listName = name;
                        caseData[caseData.length - 1].lst_nm = name;
                    }

                    if ($.inArray(result.rows.item(i).case_id, arrayCaseId) == -1) {
                        lastJusticeName = result.rows.item(i).judge_name;
                        if ($.inArray(result.rows.item(i).judge_name, justiceNameArray) == -1) {
                            justiceNameArray[justiceNameArray.length] = result.rows.item(i).judge_name;
                        }
                        justiceName = result.rows.item(i).judge_name;
                    }
                    else {
                        var name = lastJusticeName + ',' + result.rows.item(i).judge_name;
                        if ($.inArray(name, justiceNameArray) == -1) {
                            justiceNameArray[justiceNameArray.length - 1] = name;
                        }
                        else {
                            justiceNameArray.pop();
                        }
                        justiceName = name;
                        caseData[caseData.length - 1].justice_name = name;
                    }
                    caseData[caseData.length] = { 'case_id': result.rows.item(i).case_id, 'case_no': result.rows.item(i).case_no, 'list_no': result.rows.item(i).list_no, 'matter': result.rows.item(i).matter, 'party_name': result.rows.item(i).party_name, 'justice_name': justiceName, 'court_no': result.rows.item(i).court_no, 'suspected': result.rows.item(i).suspected, 'store_time': result.rows.item(i).store_time, 'lst_nm': result.rows.item(i).lst_nm };
                    arrayCaseId.push(result.rows.item(i).case_id);
                    if (result.rows.item(i).store_time > max_store_time) {
                        max_store_time = result.rows.item(i).store_time;
                    }
                    if (min_store_time == 0) {
                        min_store_time = result.rows.item(i).store_time;
                    }
                    if (result.rows.item(i).store_time < min_store_time) {
                        min_store_time = result.rows.item(i).store_time;
                    }
                    i++;
                }
                if (max_store_time == min_store_time) {
                    max_store_time = 0;
                }
                i = 0;
                var j = 0;
                var data = '';
                var courtNo = false;
                var footer = false;
                var caseId = 0;
                var lstName = '';
                var l = 0;
                while (l < listNameArray.length) {
                    i = 0;
                    while (i < justiceNameArray.length) {
                        j = 0;
                        courtNo = false;
                        footer = false;
                        caseId = 0;
                        while (j < caseData.length) {
                            if (caseData[j].lst_nm == listNameArray[l] && caseData[j].justice_name == justiceNameArray[i] && caseId != caseData[j].case_id) {
                                if (lstName == '') {
                                    data = data + caseData[j].lst_nm + "\n";
                                    data = data + "\n";
                                    lstName = caseData[j].lst_nm;
                                }
                                else {
                                    if (lstName !== caseData[j].lst_nm) {
                                        data = data + caseData[j].lst_nm + "\n";
                                        data = data + "\n";
                                        lstName = caseData[j].lst_nm;
                                    }
                                }
                                if (!courtNo) {
                                    data = data + justiceNameArray[i] + "\n";
                                    data = data + "\n";
                                    data = data + caseData[j].court_no + "\n";
                                    data = data + "\n";
                                    courtNo = true;
                                }
                                if (caseData[j].store_time == max_store_time) {
                                    data = data + '#Updated Case#';
                                    data = data + "\n";
                                }
                                if (caseData[j].suspected == 'Y') {
                                    data = data + '#Suspected Case#';
                                    data = data + "\n";
                                }
                                data = data + caseData[j].list_no + '. ' + caseData[j].case_no + "\n";
                                data = data + "\n";
                                data = data + caseData[j].matter + "\n";
                                data = data + "\n";
                                data = data + caseData[j].party_name + "\n";
                                data = data + "\n";
                                data = data + "\n";
                            }
                            caseId = caseData[j].case_id;
                            j++;
                        }
                        i++;
                    }
                    l++;
                }

                if (len == 0) {
                    data = 'No Listing For This Date And List.';
                }
                $.mobile.loading('hide');

        if(device.platform=='android' || device.platform=='Android')
        {
            data = data + "Generated using the SCS app check it out here - https://play.google.com/store/apps/details?id=com.mrsoft.pg.scs";
        }
        if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios')
        {
            data = data + "Generated using the SCS app check it out here - https://itunes.apple.com/in/app/scs-high-court-causelist/id838890348?mt=8";
        }

                var success = function () { };
                var error = function (message) { drawToast("Oops! " + message); };
                 if(device.platform=='android' || device.platform=='Android')
                 {
                      Share.createEvent(subject, data, success, error);
                 }
                 if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios')
                 {
                      window.plugins.socialsharing.share(data,subject); 
                 } 
          }
            catch (err) {
                var errMsg = err + "\nMethod: myShareCasesDateWise(jquery)" + "\nError Stack:" + err.stack; 
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
            }
        }, function (err) { $.mobile.loading('hide'); var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: myShareCasesDateWise(executeSql)"; insertErrorLogs(errMsg, function (id) { alert("Oops! Something went worng with db.") }); });
    }, function (err) { $.mobile.loading('hide'); var errMsg = "Error Code: " + err.code + "\nError Message: " + err.message + "\nMethod: myShareCasesDateWise(transaction)"; insertErrorLogs(errMsg, function (id) { alert("Oops! Something went worng with db.") }); }, successCB);
}
catch (err) {
    var errMsg = err + "\nMethod: myShareCasesDateWise12(jquery)" + "\nError Stack:" + err.stack; 
        insertErrorLogs(errMsg, function (id) { //alert("Oops! Something went worng.") 
        });
}
}

$(document).on("click", "#shareAP", function () {
    trigger_menu();
        var data;
        if(device.platform=='android' || device.platform=='Android')
        {
        data = "Hi! Check out this great app to keep track of your cases in the high court - https://play.google.com/store/apps/details?id=com.mrsoft.pg.scs";
        }
        if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios')
        {
        data = "Hi! Check out this great app to keep track of your cases in the high court - https://itunes.apple.com/in/app/scs-high-court-causelist/id838890348?mt=8";
        }

    

    var success = function () { };
    var error = function (message) { drawToast("Oops! " + message); };


                if(device.platform=='android' || device.platform=='Android')
                 {
                     Share.createEvent("Android app to track High Court Cause List", data, success, error);
                 }
                 if(device.platform=='iOS' || device.platform=='IOS' || device.platform=='ios')
                 {
                      var subject1 ="App To Track High Court Cause List";
               
                      window.plugins.socialsharing.share(data,subject1);
                 }
 
                   
  //  email.createEvent("asifanytime@gmail.com", "asif9893","Regarding Test","Hello ! This is Test mail.","asif.qureshi@mrsoftwares.in", successCallback, errorCallback);
    //sms.createEvent("9589746120", "Hello Asif !", success, error);
});


