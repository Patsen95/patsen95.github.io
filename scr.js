
function queryDb() {
	// let _link = document.getElementById("db_link").value;
	// let _id = document.getElementById("db_id").value;
	
	let _link = "secret_wQqMFCDP8T2X48JXy1hmZtE4hRbDncri3TKZ1Hv1yE5";
	let _id = "8ad689b2885b48748e60406cc8082983";

	const { Client } = require('@notionhq/client');
	const notion = new Client({
			auth: _link
		});

	(async() => {
		// const response = await notion.databases.retrieve({ database_id: _id });
		const response = await notion.databases.query({ database_id: _id });
		console.log(response);
	})();
}

function test(){
	window.alert("CLICK!");
}
