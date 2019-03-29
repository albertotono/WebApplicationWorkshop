const router = require("express").Router();
const rhino3dm = require("rhino3dm")();
const Sphere = require("server/db/Sphere");
const Cube = require("server/db/Cube");
module.exports = router;

/*
Routes
 */
// Example route returning what you see using rhino3dm
router.get("/retrieve-something", (req, res) => {
	let sphere = new rhino3dm.Sphere([1, 2, 3], 12);
	return res.json({
		sphere: sphere
	});
});

router.post("/save-sphere", (req, res) => {
	let sphere = new rhino3dm.Sphere(req.body.origin, req.body.radius);
	let sphereModel = new Sphere();
	sphereModel.sphere = sphere;
	sphereModel.volume = 4 / 3 * Math.PI * Math.pow(req.body.radius, 3);
	sphereModel.save((err, saved)=>{
		console.log("saved!");
		return res.json(sphereModel.volume);
	});
});

router.post("/save-cube", (req, res) => {
	let cube = new rhino3dm.Circle(req.body.height);
	let cubeModel = new Cube();
	cubeModel.cube = cube;
	cubeModel.volume = req.body.height * req.body.height ;
	cubeModel.save((err, saved)=>{
		console.log("saved!");
		return res.json(cubeModel.volume);
	});
});
