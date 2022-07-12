import {useContext} from "react";
import {HistoryContext} from "../../context/history-context";
import './history.scss'
import {Link} from "react-router-dom";

const History = () => {
  const historyCtx = useContext(HistoryContext);

  return (
    <div className={'history'}>
      {historyCtx.items.length> 0 ? historyCtx.items.map(history=>(
        <Link to={`/?name=${history.name}`} className={'history__item'}>
          <div className="history__item__title">
            {history.name}
          </div>
          <div className="history__item__date">
            {history.date}
          </div>
        </Link>
      )):
        (<div className={'not-found'}>You don't have any search history</div>)
      }
    </div>
  )
}

export default History