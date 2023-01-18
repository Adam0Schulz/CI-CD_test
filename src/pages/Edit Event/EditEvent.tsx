import { ScrollDownArrow } from 'components/ScrollDownArrow/ScrollDownArrow'
import './EditEvent.css'
import Navbar from 'components/Navbar'
import UpsertForm from 'components/UpsertForm/UpsertForm'
import Footer from 'components/Footer'
import calendarIcon from 'assets/icons/calendar_color.svg'
import { useParams } from 'react-router-dom'
import { useEventById } from 'features/Event/hooks/UseAllEvents'


const EditEvent = () => {

    const id = Number(useParams().id)

    const {data: event, isLoading, isError} = useEventById(id)

  // this could redirect to a 404 page
  if (!(localStorage.getItem('isAdmin'))) {
    return <>Oops! Something went wrong!</>
}

return (
    <>
        <ScrollDownArrow />
        <div className="page-cont">
            <Navbar activePage="events" />
            <div className="page-heading new-event-header">
                <div className="img_cont">
                    <img src={calendarIcon} alt="" />
                </div>
                <h4>Edit Event</h4>
            </div>
            {isLoading && "Loading..."}
            {isError && "Oops! Something went wrong!"}
            {event && <UpsertForm type="event" object={event}/>}
            
            
        </div>
        <Footer />
    </>
)
}

export default EditEvent