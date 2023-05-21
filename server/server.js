
const express = require("express");
const app = express();
const cors =require("cors");
const pool= require("./database");

//middleware
app.use(cors());
app.use(express.json()); //req.body


app.listen(3001, () => {
  console.log("Example app listening on port 3001");
});

//ROUTES//


//create an employee

app.post("/inputemployee",async (req,res)=>{
  try{
    console.log(req.body);
   const {f_name,l_name,phone,adress,email,dob,speciality} = req.body;
   const newEmployee = await pool.query("INSERT INTO employee (f_name,l_name,phone,adress) VALUES($1,$2,$3,$4) RETURNING *",
   [f_name,l_name,phone,adress] 
    );
    res.json(newEmployee.rows[0]);

  }catch (err){
    console.error(err.message);

  }
})

//create a booking

app.post("/inputbooking",async (req,res)=>{
  try{
    console.log(req.body);
   const {f_name,l_name,date,time,status} = req.body;
   const newAppointment = await pool.query("INSERT INTO appointment (f_name,l_name,date,time,status) VALUES($1,$2,$3,$4,$5) RETURNING *",
   [f_name,l_name,date,time,status] 
    );
    res.json(newAppointment.rows[0]);

  }catch (err){
    console.error(err.message);

  }
})



//get all bookings

app.get("/booking",async (req,res)=>{
  try{
    console.log(req.params);
    const allAppointments = await pool.query("SELECT * FROM appointment");
    res.json(allAppointments.rows);
    
  }catch (err){
    console.error(err.message);

  }
}

)


//login 

app.post("/login", async (req, res) => {
  try {
      const { username, password } = req.body;
      const user = await pool.query("SELECT * FROM accounts WHERE username = $1 AND password = $2", [username, password]);
      console.log(user.rows[0]);
      if(user.rows[0] != null){
          console.log("Login success!");  
          res.send(user.rows[0]);
          if(user.rows[0].type==='d'){
            res.status(200);
          }
          else if(user.rows[0].type==='p'){
            res.status(401);
          }
      }
      else{
          console.log("Login failed!");
          res.status(400);
      }   
  } catch (err) {
      console.error(err.message);
  }
});

//update a booking

app.put("/bookings/:id",async (req,res)=>{
  try{
    const {id} = req.params;
    const {description} = req.body;
    const updateAppointment = await pool.query("UPDATE appointement SET description = $1 WHERE id = $2",[description,id]);
    res.json("Appointment was updated");
  }catch (err){
    console.error(err.message);
  }
})

//delete a booking

app.delete("/bookings/:id",async (req,res)=>{
  try{
    const {id} = req.params;
    const deleteAppointment = await pool.query("DELETE FROM bokings WHERE id = $1",[id]);
    res.json("Appointment was deleted");
  }catch (err){
    console.error(err.message);
  }
})


  

