// conditional query

new GlideQuery('incident')
.where('priority', 1)
.select('short_description')
.forEach(function(task) {
	gs.info(task.short_description)
})


new GlideQuery('cmdb_ci')
// .where("name", "STARTSWITH", "A")
// .where('name', 'Access')
// .whereNotNull('name')
// .orWhereNull('') 
// .whereNull('manufacturer')
.where('manufacturer')
.select('name', "manufacturer")
.forEach(function (ci) {
    gs.info(JSON.stringify(ci));
});


var grCi = new GlideRecord('cmdb_ci');
grCi.addQuery('nameSTARTSWITHa');
grCi.query();

while(grCi.next()) {
 gs.info(grCi.name);
}


