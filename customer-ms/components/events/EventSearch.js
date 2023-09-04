//import classes from './EventSearch.module.css'

import { getMonths } from "@/dummy-data"
import { ButtonSubmit } from "../ui/ButtonSubmit"

export const EventSearch = () => {

    const months = getMonths()

    const onSubmitHandler = (ev) => {
        ev.preventDefault()
        console.log("Realizando busqueda")
    }

    return(<form>
        <div>
            <div>
                <label htmlFor="year"></label>
                <select id="year" name="year">
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>

            </div>
            <div>
                <label htmlFor="month"></label>
                <select id="month" name="month">
                    {months.map(month => <option key={month.id} value={month.id}>{month.name}</option>)}
                </select>
            </div>
        </div>
        <ButtonSubmit onSubmitHandler={onSubmitHandler}>
            Search events
        </ButtonSubmit>
    </form>
    )
}