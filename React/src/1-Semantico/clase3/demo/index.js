const React = require("react");
const {
	inputs,
	select,
	selectLocal,
	direction,
	inputCheck,
	user,
	domicilio,
} = require("../utils/utils");

function AriaExample() {
	return (
		<>
			<form>
				{inputs.map((x, i) => {
					return (
						<label htmlFor={x.id} key={i}>
							{x.labelMessage}{" "}
							<input
								id={x.id}
								tabIndex={i}
								placeholder={x?.placeholder}
								type={x.type}
							/>
						</label>
					);
				})}
				<label htmlFor="pais">Pais :</label>
				<select id="pais">
					{select.map((x, i) => {
						return (
							<option value={x.optionValue} id={x.optionName} key={i}>
								{x.optionName}
							</option>
						);
					})}
				</select>
				<label htmlFor="pais">Localidad :</label>
				<select id="pais">
					{selectLocal.map((x, i) => {
						return (
							<option value={x.optionValue} id={x.optionName} key={i}>
								{x.optionName}
							</option>
						);
					})}
				</select>

				{direction.map((x, i) => {
					return (
						<label htmlFor={x.id} key={i}>
							{x.labelMessage}{" "}
							<input
								id={x.id}
								tabIndex={i}
								placeholder={x?.placeholder}
								type={x.type}
							/>
						</label>
					);
				})}
				{inputCheck.map((x, i) => {
					return (
						<label htmlFor={x.id} key={i}>
							{x.labelMessage}{" "}
							<input
								id={x.id}
								tabIndex={i}
								placeholder={x?.placeholder}
								type={x.type}
							/>
						</label>
					);
				})}
				{user.map((x, i) => {
					return (
						<label htmlFor={x.id} key={i}>
							{x.labelMessage}{" "}
							<input
								id={x.id}
								tabIndex={i}
								placeholder={x?.placeholder}
								type={x.type}
							/>
						</label>
					);
				})}
				<span>Domicilio</span>
				{domicilio.map((x, i) => {
					return (
						<label htmlFor={x.id} key={i}>
							{x.labelMessage}{" "}
							<input
								id={x.id}
								tabIndex={i}
								placeholder={x?.placeholder}
								type={x.type}
							/>
						</label>
					);
				})}
			</form>
		</>
	);
}

export default AriaExample;
