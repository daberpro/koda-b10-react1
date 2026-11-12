import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {string, object, number, array} from "yup";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function FormPage() {

    const schema = object({
        nama: string().min(4).required(),
        umur: number().min(18).required(),
        "jenis-kelamin": string().required(),
        perokok: string().required(),
        merek: array().optional()
    });

    const { handleSubmit, register, formState } = useForm({
        defaultValues: {
            nama: "",
            umur: 0,
            "jenis-kelamin": "Laki-laki",
            perokok: "Perokok",
            merek: []
        },
        resolver: yupResolver(schema)
    });

    let [prevData, setPrevData] = useState([]);
    useEffect(() => {
        let data = [];
        try {
            data = JSON.parse(localStorage.getItem("data") || "[]")
        } catch {
            console.log("failed to load prev data, using default empty storage");
        }
        setPrevData(data);
    },[]);

    useEffect(() => {
        console.log(formState.errors);
    },[formState]);

    function saveData(values) {
        localStorage.setItem("data", JSON.stringify([...prevData, values]));
    }

    return (
        <div className="w-full bg-slate-100 h-full flex flex-col justify-start items-center">
            <form onSubmit={handleSubmit(saveData)} className="p-3 gap-6 flex justify-center items-start flex-col max-w-200 w-full" action="">
                <div className="w-full bg-white rounded-xl p-6 flex flex-col justify-center gap-4 items-start">
                    <label htmlFor="name" className="text-xl">Siapa nama anda?</label>
                    <input className="border-b w-full p-4 outline-0 border-b-slate-600" {...register("nama", { required: true })} id="name" type="text" />
                    {formState.errors["nama"] && <span className="w-full text-start text-red-500">{ formState.errors["nama"].message }</span>}
                </div>

                <div className="w-full bg-white rounded-xl p-6 flex flex-col justify-center gap-4 items-start">
                    <label htmlFor="age" className="text-xl">Berapa umur anda?</label>
                    <br />
                    <input {...register("umur")} id="age" type="number" />
                </div>
                {formState.errors["umur"] && <span>{ formState.errors["umur"].message }</span>}

                <div className="w-full bg-white rounded-xl p-6 flex flex-col justify-center gap-4 items-start">
                    <span className="text-xl">Apa jenis kelamin anda?</span>
                    <div>
                        <input
                            {...register("jenis-kelamin")}
                            id="male"
                            type="radio"
                            value="Laki-laki"
                            defaultChecked
                        />
                        <label htmlFor="male">Laki-laki</label>
                        <input
                            {...register("jenis-kelamin")}
                            id="female"
                            type="radio"
                            value="Perempuan"
                        />
                        <label htmlFor="female">Perempuan</label>
                    </div>
                </div>

                <div className="w-full bg-white rounded-xl p-6 flex flex-col justify-center gap-4 items-start">
                    <span className="text-xl">Apakah anda perokok?</span>
                    <br />
                    <div>
                        <input
                            defaultChecked
                            {...register("perokok")}
                            id="smoker"
                            type="radio"
                            value="Perokok"
                        />
                        <label htmlFor="smoker">Ya</label>
                        <input
                            {...register("perokok")}
                            id="notsmoker"
                            type="radio"
                            value="Bukan perokok"
                        />
                        <label htmlFor="notsmoker">Tidak</label>
                    </div>
                </div>

                <div className="w-full bg-white rounded-xl p-6 flex flex-col justify-center gap-4 items-start">
                    Jika anda perokok, rokok apa yang pernah anda coba?
                    <div>
                        <input
                            type="checkbox"
                            id="m1"
                            {...register("merek")}
                            value="Gudang garam filter"
                        />
                        <label htmlFor="m1">Gudang garam filter</label>
                        <br />
                        <input
                            type="checkbox"
                            id="m2"
                            {...register("merek")}
                            value="Luck Strike"
                        />
                        <label htmlFor="m2">Luck Strike</label>
                        <br />
                        <input
                            type="checkbox"
                            id="m3"
                            {...register("merek")}
                            value="Marioboro"
                        />
                        <label htmlFor="m3">Marioboro</label>
                        <br />
                        <input
                            type="checkbox"
                            id="m4"
                            {...register("merek")}
                            value="Esse"
                        />
                        <label htmlFor="m4">Esse</label>
                        <br />
                    </div>
                </div>

                <div>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
                <div className="w-full p-6 flex items-center justify-center flex-row">
                    <Link to="/result">See the result</Link>
                </div>
            </form>
        </div>
    );
}
