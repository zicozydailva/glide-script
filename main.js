// conditional query

new GlideQuery("incident")
  .where("priority", 1)
  .select("short_description")
  .forEach(function (task) {
    gs.info(task.short_description);
  });

new GlideQuery("cmdb_ci")
  // .where("name", "STARTSWITH", "A")
  // .where('name', 'Access')
  // .whereNotNull('name')
  // .orWhereNull('')
  // .whereNull('manufacturer')
  .where("manufacturer")
  .select("name", "manufacturer")
  .forEach(function (ci) {
    gs.info(JSON.stringify(ci));
  });

// GlideRecord sample
var grCi = new GlideRecord("cmdb_ci");
grCi.addQuery("nameSTARTSWITHa");
grCi.query();

while (grCi.next()) {
  gs.info(grCi.name);
}

// to get display value
new GlideQuery("incident")
  .where("priority", 1)
  .select("short_description", "priority$DISPLAY")
  .forEach(function (task) {
    gs.info(task.short_description);
    gs.info(task.priority$DISPLAY);
  });

// using encoded query condition to filter
new GlideQuery.parse("incident", "priority=3")
  .select("short_description", "priority$DISPLAY")
  .forEach(function (task) {
    gs.info(task.short_description);
    gs.info(task.priority$DISPLAY);
  });

// insert record
new GlideQuery("incident")
  .disableAutoSysFields()
  .disableWorkflow() // to disable all business rules
  .insert({ description: "example", priority: 1 });

// update record short desc
new GlideQuery("incident")
  .where("sys_id", "=", "46c03489a9fe19810148cd5b8cbf501e")
  .disableAutoSysFields()
  .disableWorkflow()
  .update({ short_description: "working progress", priority: 1 });

// alternatively
var user = new GlideQuery("incident").disableWorkflow().insertOrUpdate({
  sys_id: "e7f005b783b6d2109b63c170deaad326",
  short_description: "Test Inc",
});
