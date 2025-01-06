// conditional query

new GlideQuery('incident')
.where('priority', 1)
.select('short_description')
.forEach(function(task) {
	gs.info(task.short_description)
})