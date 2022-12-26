import { NavLink, Outlet } from "react-router-dom";
import WidgetWrapper from "../components/WidgetWrapper";

function History() {
  return (
    <WidgetWrapper>
      <div className='history-content'>
        <div className='sub-menu'>
          <ul className='nav'>
            <li className='nav-item'>
              <NavLink to='/home/history/all'>Tất cả</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/home/history/sendpoint'>Tặng sao</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/home/history/receivepoint'>Nhận sao</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/home/history/clap'>Vỗ tay</NavLink>
            </li>
          </ul>
        </div>
        <Outlet></Outlet>
      </div>
    </WidgetWrapper>
  );
}

export default History;
