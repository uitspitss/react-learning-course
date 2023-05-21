import { Todo } from "./models.js";

const endpoints = (app) => {
  app.get("/", (req, res) => {
    /*
      #swagger.responses[200] = {
        description: "api health",
        content: {
          "application/json": {
            schema:{
              status: 'up'
            }
          }
        }
      }
    */
    res.json({ status: "up" });
  });

  app.get("/todos", async (req, res) => {
    /*
      #swagger.responses[200] = { description: 'Get ToDo list', schema: { $ref: '#/definitions/ToDoList'}}
    */

    const todos = await Todo.find();
    res.json(todos);
  });

  app.get("/todos/:todoId", async (req, res) => {
    /*
      #swagger.responses[200] = { description: 'Get a ToDo', schema: {$ref: '#/definitions/ToDo' }}
    */

    if (!mongoose.isValidObjectId(req.params.todoId)) {
      res.status(400).json({ message: "invalid params" });
    }

    const todo = await Todo.findById(req.params.todoId);
    if (!todo) {
      res.status(404).json({ message: "not found" });
    }
    res.json(todo);
  });

  app.post("/todos", async (req, res) => {
    /*
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Add a ToDo',
        schema: {
          $text: 'ToDo text'
        }
      }
      #swagger.responses[201] = { schema: { $ref: '#/definitions/ToDo' }}
    */

    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  });

  app.patch("/todos/:todoId", async (req, res) => {
    /*
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Add a ToDo',
        schema: {
          $text: 'ToDo text'
          $checked: true
        }
      }
      #swagger.responses[201] = { schema: { $ref: '#/definitions/ToDo' }}
    */

    const id = req.params.todoId;
    const todo = await Todo.findByIdAndUpdate(id, req.body);
    res.status(201).json(todo);
  });

  app.delete("/todos/:todoId", async (req, res) => {
    const id = req.params.todoId;
    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(404).json({ message: "not found" });
    }
    res.status(204).send();
  });
};

export default endpoints;
