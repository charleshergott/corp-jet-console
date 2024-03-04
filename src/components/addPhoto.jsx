import { Timestamp, addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { db, storage } from "../configs/firebaseConfig";

export function AddPhoto() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        createdAt: Timestamp.now().toDate(),
    });

    const [progress, setProgress] = useState(0);

    const handleChange = e => {
        setFormData(ov => ({ ...ov, [e.target.name]: e.target.value }))
    }

    const handleImageChange = e => {
        setFormData(ov => ({ ...ov, image: e.target.files[0] }))
    }

    const handlePublish = e => {
        if (!formData.title || !formData.description || !formData.image) {
            alert("Please fill all the fields");
            return;
        }

        const storageRef = ref(storage, `/images/${Date.now}_${formData.image.name}`)
        const uploadImage = uploadBytesResumable(storageRef, formData.image);
        uploadImage.on(
            "state_changed",
            (snapshot) => {
                const progressPercent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progressPercent);
            },
            (err) => {
                console.log(err);
            },
            () => {
                setFormData({
                    title: "",
                    description: "",
                    image: "",
                });

                getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                    const articleRef = collection(db, "Articles");
                    addDoc(articleRef, {
                        title: formData.title,
                        description: formData.description,
                        imgUrl: url,
                        createdAt: Timestamp.now().toDate(),
                    })
                        .then(() => {

                            setProgress(0);
                        })
                        .catch((err) => {
                            console.log(err)
                        });
                });
            }
        );
    }

    return <div className="">
        <>
            <div className="">
                <label htmlFor="pictures" className="form-label"></label>
                <input
                    name="pictures"
                    type="file"
                    className="form-control"
                    onChange="<AddPhoto />"
                    // onChange={handleFileInputChange}
                    multiple // Allow multiple file selection if needed
                    accept="image/*" // Accept only image files
                    required
                />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
        </>
    </div>
}