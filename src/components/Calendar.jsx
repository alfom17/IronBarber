import {
    Calendar as BigCalendar,
    CalendarProps,
    momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);

function Calendar(props) {
    return <BigCalendar {...props} localizer={localizer} />;
  }

  export default Calendar