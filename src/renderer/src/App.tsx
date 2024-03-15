import { useState } from 'react'



function App(): JSX.Element {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const submit = async () => {
		if (!username.length || !password.length) return
		console.log(username, password)
		const result = await window.electron.ipcRenderer.invoke('chack-login',username, password)
		console.log(result)
	}
	const keyUpEnter = (ev) => {
		if (ev.key !== 'Enter') return 
		submit()
	}
	return (
		<div className="container">
			<div className="login">
				<p>admin,123456</p>
				<h3>login</h3>
				<ul>
					<li>
						<span>账号</span>
						<input value={username} onChange={(ev) => setUsername(ev.target.value)} type="text" placeholder="请输入账号" />
					</li>
					<li>
						<span>密码</span>
						<input 
							value={password} 
							onChange={(ev) => setPassword(ev.target.value)} 
							onKeyUp={keyUpEnter}
							type="password" 
							placeholder="请输入密码"/>
					</li>
				</ul>
				<button onClick={submit}>登陆</button>
			</div>
		</div>
	)
}

export default App
