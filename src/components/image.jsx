import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from '../configs/firebaseConfig'

export function Images() {
    const [images, setImages] = useState([])

    useEffect(() => {
        const imageRef = collection(db, "Images");
        const q = query(imageRef, orderBy('createdAt', 'desc'))
        onSnapshot(q, snapshot => {
            const imageSnapshots = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setImages(imageSnapshots)
            console.log(imageSnapshots)
        })
    }, [])

    return <div>
        {
            images.length === 0 ? (
                <p>No Images yet !</p>
            ) : (
                images.map(
                    ({
                        id,
                        title,
                        imgUrl,
                        description,
                        createdAt
                    }) => <div key={id} className="">


                            <img
                                src={imgUrl}
                                alt={title}
                                style={{ width: 180, height: 180 }}
                            />


                            <div className="">
                                {/* <DeleteArticle id={id} imgUrl={imgUrl} /> */}
                                <button className="btn btn.primary">X</button>
                            </div>
                        </div>
                )
            )

        }
    </div>
}