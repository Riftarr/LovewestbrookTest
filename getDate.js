var curday = function (sp) {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    document.getElementById("PROGRAM").setAttribute('download', ('PROGRAM-'+mm + '-' + dd + '-' + yyyy));

    return ('PROGRAM-'+mm + sp + dd + sp + yyyy);
};
console.log(curday('-'));