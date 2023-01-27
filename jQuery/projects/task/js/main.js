let tasks = JSON.parse(localStorage.getItem("taskjquery"))

if (tasks) tasks.map((el) => createDiv(el))
else tasks = []
console.log(tasks)

// From SUBMIT
$("#form").submit((e) => {
	e.preventDefault()

	let title = $("#title").val()
	let desc = $("#desc").val()

	if(title === "" && desc === "") return 

	if (tasks.find((task) => task.title == $("#title").val())) {
		alert("ya existe esta nota")
		$("#title").val("")
		$("#desc").val("")
		return
	}

	createDiv({ title, desc })

	tasks = [
		...tasks,
		{
			title,
			desc,
		},
	]

	localStorage.setItem("taskjquery", JSON.stringify(tasks))
})

function createDiv({ title, desc }) {
	$("#list").append(`
          <div class="note">
            <h2>${title}</h2>
            <p> ${desc} </p>
            <button onclick="deleteNote('${title}')" >eliminar</button>
          </div>
        `)
}

function deleteNote(id) {
	console.log(id)
	tasks = tasks.filter((el) => {
		return el.title !== id
	})
	$("#list").html("")
	tasks.map((el) => createDiv(el))
	localStorage.setItem("taskjquery", JSON.stringify(tasks))
}
