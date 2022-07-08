const supertest = require("supertest");

const htttpMocks = require('node-mocks-http');
const { app } = require("../app");
const {user,auth} = require('./admin');
const api = supertest(app);

describe("Middlewares",()=>{
  const req = htttpMocks.createRequest({method:'GET', url:'/api/user'});
  const res = htttpMocks.createResponse();
  
  it("user debe guardar en res.locals.user un objeto",()=>{
    const request = htttpMocks.createRequest({

			method: "GET",
			url: "/api/user",
			body: {
				id: 1,
				name: "Irunga",
				admin: true,
			},
		});

    return user(request,res,()=>{
      console.log(res.locals)
      expect(res.locals.user).toBeDefined()
      expect(res.locals.user).toBeInstanceOf(Object)
    })
  })
  it("user debe guardar el objeto que recibe por body con los atributos id,name y admin", () => {
    return user(req, res, () => {
      ['id','name','admin'].forEach(property =>{
        expect(res.locals.user).toHaveProperty(property);
      })
    });
  });
  
  it("auth Debe devolver un mensaje 'El usuario ${name}, es admin' si es admin", async () => {

		const userObject = { id: 2, name: "pepe", admin: true };
		const response = await api.get("/api/user").send(userObject);
		expect(response.text).toBe(`El usuario ${userObject.name}, es admin`);
	});

   it("auth Debe devolver un mensaje 'Error Auth' si no es admin", async () => {
			const response = await api
				.get("/api/user")
				.send({ id: 2, name: "pepe", admin: false });

			expect(response.text).toMatch(/Error Auth/i);
		});
})

