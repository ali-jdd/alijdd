import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [modal, setModal] = useState(false)
  const [info, setInfo] = useState({})
  const [name, setName] = useState("")
  const [lastName, setLastname] = useState("")
  const [phone, setPhone] = useState("")
  const [age, setAge] = useState("")
  const [sex, setSex] = useState("")
  const [img, setImg] = useState(null)
  console.log(info)
  const handleSubmit = () => {
    setInfo({
      name, lastName, img, phone, age, sex
    })
    if (!name || !lastName || !phone || !age || !sex || !img) {
      alert("اطلاعات را وارد کنید")
    } else {
      setModal(!modal)

    }
  }
  return (
    <div dir='rtl' className="App flex w-screen h-screen justify-center items-center ">
      {modal && (
        <div onClick={() => setModal(false)} className=' w-screen fixed flex justify-center items-center h-screen'>
          <div onClick={(e) => e.stopPropagation()} className=' flex w-[40%] justify-center items-center h-[80%] rounded-xl  bg-white'>
            <div className=' w-3/5 flex justify-center items-center  flex-col gap-9'>
              <img src={info.img} />
              <div className=' flex'>
                <h2 className='text-3xl'>نام:</h2>
                <h2 className='text-3xl'>{info.name}</h2>
              </div>
              <div className=' flex'>
                <h2 className=' text-3xl'>نام خانوادگی:</h2>
                <h2 className=' text-3xl'>{info.lastName}</h2>
              </div>
              <div className=' flex'>
                <h2 className=' text-3xl'>سن:</h2>
                <h2 className=' text-3xl'>{info.age}</h2>
              </div>
              <div className=' flex'>
                <h2 className=' text-3xl'>شماره تماس:</h2>
                <h2 className=' text-3xl'>{info.phone}</h2>
              </div>
              <div className=' flex'>
                <h2 className=' text-3xl'>جنسیت:</h2>
                <h2 className=' text-3xl'>{info.sex}</h2>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      )}
      <div className=' flex flex-col justify-center  items-center gap-7 w-2/6 h-4/5 bg-white rounded-2xl bg-opacity-80 shadow-2xl'>
        <h2 className=' text-2xl font-semibold'>پروفایل ساز</h2>
        <input onChange={(e) => setName(e.target.value)} placeholder='نام' className=' w-3/4 rounded-lg h-12 border-2 border-sky-300 p-3' />
        <input onChange={(e) => setLastname(e.target.value)} placeholder='نام خانوادگی' className=' w-3/4 rounded-lg h-12 border-2 border-sky-300 p-3' />
        <input onChange={(e) => setPhone(e.target.value)} placeholder='شماره تماس' className=' w-3/4 rounded-lg h-12 border-2 border-sky-300 p-3' />
        <input onChange={(e) => setAge(e.target.value)} placeholder='سن' className=' w-3/4 rounded-lg h-12 border-2 border-sky-300 p-3' />
        <select onChange={(e) => setSex(e.target.value)} className=' w-3/4 rounded-lg h-12 border-2 border-sky-300 px-3'>
          <option>مرد</option>
          <option>زن</option>
        </select>
        <label className=' w-3/4 h-16 items-center justify-center flex text-xl border-2 border-sky-300 rounded-lg bg-white'>
          <h2>آپلود عکس</h2>
          <input onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} hidden className=' w-full' type='file' />
        </label>
        <button onClick={handleSubmit} className=' w-3/4 h-14 bg-sky-400 text-2xl text-white rounded-lg'>ثبت</button>
      </div>
    </div>
  );
}

export default App;
