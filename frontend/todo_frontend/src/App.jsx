import Flex from "./components/Flex"
import { FaCircleMinus } from "react-icons/fa6"
import axios from "axios"



function App() {
	const database_url = import.meta.env.VITE_BACKEND_DATABASE_URL

	let [todoData, setTodoData] = useState("")
	let [dataArr, setDataArr] = useState([])
	let [updatePage, setUpdatePage] = useState(false)
	let [showUpdateForm, setShowUpdateForm] = useState(false)
	let [updateId, setUpdateId] = useState(null)
	let [updateData, setUpdateData] = useState("")
	let [indexNum, setIndexNum] = useState(null)
	let [deleteItem, setDeleteItem] = useState(false)

	let handleInput = (e) => {
		setTodoData(e.target.value)
	}

	let handleSubmit = (e) => {
		if (todoData) {
			axios
				.post(`${database_url}api/todo`, {
					data: todoData,
				})
				.then((data) => {
					setUpdatePage(!updatePage)
					setTodoData("")
					console.log(data)
				})
				.catch((err) => {
					console.log(err)
				})
		} else {
			alert("Please input your task.")
		}
	}
	let handleDelete = (id, index) => {
		axios
			.delete(`${database_url}api/delete_todo`, {
				data: { id },
			})
			.then((data) => {
				console.log(data)
				console.log("Hey?")
			})
			.catch((err) => {
				console.log(err)
			})

		dataArr.splice(index, 1)
		setDeleteItem(true)
		setUpdatePage(!updatePage)
	}

	let handleUpdate = () => {
		if (updateData) {
			axios
				.put(`${database_url}api/update_data`, {
					id: updateId,
					todo: updateData,
				})
				.then((data) => {
					console.log(data)
				})
				.catch((err) => {
					console.log(err)
				})
			dataArr[indexNum].todo = updateData
			setIndexNum(null)
		} else {
			alert("Please input your task.")
		}
		setUpdateData("")
		setShowUpdateForm(false)
	}

	let handleUpdateInput = (e) => {
		setUpdateData(e.target.value)
	}

	let handleEdit = (id, index) => {
		setShowUpdateForm(true)
		setUpdateId(id)
		setIndexNum(index)
	}

	let handleClose = () => {
		setShowUpdateForm(false)
		setUpdateId(null)
		setUpdateData("")
	}

	useEffect(() => {
		async function getTodoDataFunction() {
			let getTodoData = await axios.get(`${database_url}api/get_todos`)
			setDataArr(getTodoData.data)
		}
		if (!deleteItem) {
			getTodoDataFunction()
		}
		setDeleteItem(false)	
	}, [updatePage])

	return (
		<>
			<Flex className={"flex-col items-center"}>
				<Flex>
					<h1 className=' inline-block my-5 text-6xl text-[#646ede] font-sans'>Todo</h1>
				</Flex>
				<Flex className={"mt-5 gap-3"}>
					<input
						onChange={handleInput}
						value={todoData}
						type={"text"}
						placeholder={"Enter your text here "}
						className={"py-2 pl-2 pr-20 border-2 border-[#87878a] rounded-md"}
					></input>
					<button
						className='py-2 px-4 font-sans font-semibold rounded-md bg-[#6be884] hover:bg-[#04de72] duration-200'
						onClick={handleSubmit}
					>
						Submit
					</button>
				</Flex>

				<h3 className='text-2xl text-[#2f302f] font-semibold font-sans mt-20 mb-10'>
					{dataArr.length} Todo's
				</h3>
				<Flex className={" border-t-2 border-b-2 py-3 flex-col gap-3"}>
					{dataArr.map((e, index) => (
						<Flex className={"w-[450px] bg-[#e1eaf5] py-3 rounded-md justify-between px-8"}>
							<h4 className='text-[#2f302f] text-lg font-semibold font-sans'>{e.todo}</h4>
							<Flex className={"items-center"}>
								<button
									className='py-1 px-4 font-sans font-semibold rounded-md bg-[#b9bbbd] hover:bg-[#909191] duration-200 mr-4'
									onClick={() => handleEdit(e._id, index)}
								>
									Edit
								</button>
								<FaCircleMinus
									className='w-5 h-5 text-[#e31220] hover:cursor-pointer'
									onClick={() => handleDelete(e._id, index)}
								/>
							</Flex>
						</Flex>
					))}
				</Flex>
			</Flex>

			{showUpdateForm && (
				<>
					<div className='w-full h-full bg-black opacity-65 absolute top-0 left-0 z-0'></div>
					<div className='w-[300px] pb-5 bg-[#c4d7f5] absolute z-10 top-1/2 left-1/2 -translate-x-1/2   -translate-y-1/2 rounded-2xl'>
						<Flex className={"items-center flex-col "}>
							<h4 className='text-[#2f302f] text-xl font-semibold font-sans mt-4 mb-6'>
								Update The Value
							</h4>
							<input
								onChange={handleUpdateInput}
								value={updateData}
								type={"text"}
								placeholder={"Enter your text here "}
								className={"py-2 pl-2 pr-20 border-2 border-[#a0a0a5] rounded-md"}
							></input>
							<Flex className={"mt-6 gap-6"}>
								<button
									className='w-[100px] py-1 px-4 font-sans font-semibold rounded-md bg-[#6be884] hover:bg-[#04de72] duration-200'
									onClick={handleUpdate}
								>
									Update
								</button>
								<button
									className='w-[100px] py-1 px-4 font-sans font-semibold rounded-md bg-[#e05e67] hover:bg-[#dd4852] duration-200'
									onClick={handleClose}
								>
									Close
								</button>
							</Flex>
						</Flex>
					</div>
				</>
			)}
		</>
	)
}
import { useState } from "react"
import { useEffect } from "react"

export default App
