import React, { useEffect, useState } from "react";
import Userdata from "./Userdata";
import Paginate from "./Paginate";
const User = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(10)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function getData() {

        const response = await fetch("https://randomuser.me/api/?results=100")
        const result = await response.json()
        return result
    }
    useEffect(() => {
        getData()
            .then(result => {
                setLoading(true)
                setData(result.results)
            })
            .catch((error) => {
                setLoading(false)
                setError("No internet connection")
            }
            )
    }, [])



    const lastPost = currentPage * postPerPage
    const firstPost = lastPost - postPerPage
    const currentPost = data.slice(firstPost,lastPost)

    const paginates = (numbers) => {
        setCurrentPage(numbers)
    } 
    const prevPage = () => {
        if (currentPage === 1) {
           return
        } else {
            setCurrentPage(currentPage - 1)
        }
        
    }
    const nextPage = () => {
        if (currentPage === 10) {
            return
         } else {
             setCurrentPage(currentPage + 1)
         }
    }
    return (
        <div>
           
            <Userdata data={currentPost} loading={loading} error ={error} />
            <Paginate totalPost={data.length} postPerPage={postPerPage} prevPage={prevPage} nextPage={nextPage} paginates={paginates} />
        </div>
    )
}

export default User