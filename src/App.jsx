export default function App() {

    return (
    <form action="">

            <div>
                <label htmlFor="name">Siapa nama anda?</label>
                <br/>
                <input name="nama" id="name" type="text"/>
            </div>

            <div>
                <label htmlFor="age">Berapa umur anda?</label>
                <br/>
                <input name="umur" id="age" type="number"/>
            </div>

            <div>
                Apa jenis kelamin anda?
                <br/>
                <div>
                    <input name="jenis-kelamin" id="male" type="radio" value="Laki-laki" defaultChecked />
                    <label htmlFor="male">Laki-laki</label>
                    <input name="jenis-kelamin" id="female" type="radio" value="Perempuan" />
                    <label htmlFor="female">Perempuan</label>
                </div>
            </div>

            <div>
                Apakah anda perokok?
                <br />
                <div>
                    <input defaultChecked name="perokok" id="smoker" type="radio" value="Perokok"/>
                    <label htmlFor="smoker">Ya</label>
                    <input name="perokok" id="notsmoker" type="radio" value="Bukan perokok"/>
                    <label htmlFor="notsmoker">Tidak</label>
                </div>
            </div>

            <div>
                Jika anda perokok, rokok apa yang pernah anda coba?
                <div>
                    <input type="checkbox" id="m1" name="merek" value="Gudang garam filter"/><label htmlFor="m1">Gudang garam filter</label><br/>
                    <input type="checkbox" id="m2" name="merek" value="Luck Strike"/><label htmlFor="m2">Luck Strike</label><br/>
                    <input type="checkbox" id="m3" name="merek" value="Marioboro"/><label htmlFor="m3">Marioboro</label><br/>
                    <input type="checkbox" id="m4" name="merek" value="Esse"/><label htmlFor="m4">Esse</label><br/>
                </div>
            </div>

            <div>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </div>

        </form>
    )

}
