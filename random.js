var question = [
'¿Cuál es tu teléfono y correo electrónico?',
'¿En dónde trabajas? Empresa y ubicación',
'¿Cuáles son tus responsabilidades?',
'¿En qué otras áreas tienes experiencia?',
'¿Qué días y horarios tienes disponibles?',
'¿Cuáles son tus hobbies?',
'¿Cómo te volviste miembro de PMI Guatemala?',
'¿Qué esperas del programa?',
'Si pudieras elegir un nombre nuevo, ¿cuál sería?',
'Si algún día en Walmart, te dieran Q50 extras de vuelto, ¿qué harías?',
'¿Cuál es una lección que has aprendido en tu último proyecto?',
'¿Cuál es un mal hábito que hace mucho tiempo te quieres quitar?',
'La semana pasada, ¿cuál fue el día que más disfrutaste y por qué?',
'De lo que llevas puesto hoy, ¿qué artículo te representa más?',
'Elige un objeto raro que lleves en tu billetera, y explica por qué siempre lo llevas.',
'Si fueras presidente, ¿qué sería lo primero que harías?',
'¿Cuál va a ser el primer lugar a donde vayas cuando se acabe la pandemia?',
'Si te dieran un millón de dólares, y 24 horas para gastarlo. Sin depositarlo en el banco ni invertirlo, ¿qué comprarías?',
'¿Qué objetivos has tenido que modificar debido a la pandemia?'];   
var person = ['El mentee', 'El mentor', 'Todos'];   

function getRandomQuestion() {
var pos = Math.floor(Math.random() * question.length);
	$("#question").html('<span class="glyphicon glyphicon-question-sign"></span><strong> La pregunta es: </strong>' + question[pos]);
	console.log(question);
	question.splice(pos,1);
	console.log(question);
	pos = Math.floor(Math.random() * person.length);
	$("#person").html('<span class="glyphicon glyphicon-user"></span><strong> La persona que responde: </strong>' + person[pos]);
	person.splice(pos,1);
}
