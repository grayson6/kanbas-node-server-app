const module = {
    id: "1",
    name: "Web Development",
    description: "Learn the basics of web development",
    course: "CS5610",
  };
  
  export default function Module(app) {
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
  
    app.get("/lab5/module/name", (req, res) => {
      res.json(module.name);
    });
  
    app.post("/lab5/module/name/:name", (req, res) => {
      module.name = req.params.name;
      res.json(module);
    });
  
    app.post("/lab5/module/description/:description", (req, res) => {
      module.description = req.params.description;
      res.json(module);
  });
}
