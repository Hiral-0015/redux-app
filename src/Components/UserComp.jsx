import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addUserApi, fetchUserApi, editUserApi, deleteUserApi } from '../Redux/Slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const UserComp = () => {
    const [obj, setobj] = useState({})
    const data = useSelector(state => state.user.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserApi())
    }, [])

    const getInputValue = (e) => {
        if(e.target.type === 'checkbox'){
            if(obj[e.target.name] == undefined){
                obj [e.target.name] = [];
            }
            if(e.target.checked){
                setobj ({ ...obj , [e.target.name]: [ ...obj[e.target.name], e.target.value ]}) 
            }else{

               setobj({ ...obj , [e.target.name]: obj[e.target.name].filter(x => x != e.target.value)}) 
            
            }
        }
        else{
            setobj( { ...obj , [e.target.name] : e.target.value})
        }
    }
    const saveData = (e) => {
        e.preventDefault()
        if (obj._id) {
            Editapi(obj._id)
        } else {
            Addapi()
        }
        setobj({})
    }
    
    
    
    const Addapi = () => {
        let objData = new FormData();
        objData.append('category', obj.category);
        objData.append('productName', obj.productName);
        objData.append('price', obj.price);
        objData.append('clothSize', obj.clothSize);
        objData.append('inStock', obj.inStock);
        objData.append('description', obj.description);
        
        dispatch(addUserApi(objData)) 
    }
    
    const Editapi = (id) => {
        let objData = new FormData();
        objData.append('id', obj._id);
        objData.append('category', obj.category);
        objData.append('productName', obj.productName);
        objData.append('price', obj.price);
        objData.append('clothSize', obj.clothSize);
        objData.append('inStock', obj.inStock);
        objData.append('description', obj.description);

        dispatch(editUserApi(objData))

    }
    const DeleteData=(id)=>{
        dispatch(deleteUserApi(id))
    }
    return (
        <>
            <form className='mx-auto w-50 px-2 py-3 rounded' style={{ backgroundColor: '#f2d7d5' }}>
                <div>
                    <label className='w-100'>Category:</label>
                    <input type="text" name='category' className='w-100 mb-2 mt-1 border-0 rounded' onChange={getInputValue} value={obj.category ?? ''} />
                </div>
                <div>
                    <label className='w-100'>Product Name:</label>
                    <input type="text" name='productName' className='w-100 mb-2 mt-1 border-0 rounded' onChange={getInputValue} value={obj.productName ?? ''} />
                </div>
                <div>
                    <label className='w-100'>Price:</label>
                    <input type="text" name='price' className='w-100 mb-2 mt-1 border-0 rounded' onChange={getInputValue} value={obj.price ?? ''} />
                </div>
                <div>
                    <label className='w-100'>Cloth Size:</label>
                    <input type="checkbox" name='clothSize' value="X" className='mb-2 mt-1 ms-2' checked={obj.clothSize?.includes("X") ?? false} onChange={getInputValue} />X
                    <input type="checkbox" name='clothSize' value="XS" className='mb-2 mt-1 ms-2' checked={obj.clothSize?.includes("XS") ?? false} onChange={getInputValue} />XS
                    <input type="checkbox" name='clothSize' value="M" className='mb-2 mt-1 ms-2' checked={obj.clothSize?.includes("M") ?? false} onChange={getInputValue} />M
                    <input type="checkbox" name='clothSize' value="L" className='mb-2 mt-1 ms-2' checked={obj.clothSize?.includes("L") ?? false} onChange={getInputValue} />L
                    <input type="checkbox" name='clothSize' value="XL" className='mb-2 mt-1 ms-2' checked={obj.clothSize?.includes("XL") ?? false} onChange={getInputValue} />XL
                    <input type="checkbox" name='clothSize' value="XXL" className='mb-2 mt-1 ms-2' checked={obj.clothSize?.includes("XXL") ?? false} onChange={getInputValue} />XXL


                </div>
                <div>
                    <label className='w-100'>In Stock:</label>
                    <input type="radio" name='inStock' className=' mb-2 mt-1' onChange={getInputValue} value='In Stock' checked={obj.inStock=='In Stock'} />In Stock
                    <input type="radio" name='inStock' className=' mb-2 mt-1' onChange={getInputValue} value='Out Of Stock' checked={obj.inStock=='Out Of Stock'} />Out Of Stock

                </div>
                <div>
                    <label className='w-100'>Description:</label>
                    <input type="text" name='description' className='w-100 mb-2 mt-1 border-0 rounded' onChange={getInputValue} value={obj.description ?? ''} />
                </div>
                <div>
                    <button type='submit' className='btn btn-success mt-4' style={{ backgroundColor: "black" }} onClick={saveData}>Submit</button>
                </div>
            </form>
            <table className='table mt-3'>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: 'lavender' }}>Id</th>
                        <th style={{ backgroundColor: 'lavender' }}>Category</th>
                        <th style={{ backgroundColor: 'lavender' }}>Product Name</th>
                        <th style={{ backgroundColor: 'lavender' }}>Price</th>
                        <th style={{ backgroundColor: 'lavender' }}>Cloth Size</th>
                        <th style={{ backgroundColor: 'lavender' }}>In Stock</th>
                        <th style={{ backgroundColor: 'lavender' }}>Description</th>
                        <th style={{ backgroundColor: 'lavender' }}>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((x, i) => {
                            return <tr key={i}>
                                <td>{x._id}</td>
                                <td>{x.category}</td>
                                <td>{x.productName}</td>
                                <td>{x.price}</td>
                                <td>{x.clothSize}</td>
                                <td>{x.inStock}</td>
                                <td>{x.description}</td>
                                <td>

                                <button className='btn btn-warning' onClick={()=>setobj(x)}>EDIT</button>
                                <button className='btn btn-danger ms-2' onClick={() =>DeleteData(x._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default UserComp

