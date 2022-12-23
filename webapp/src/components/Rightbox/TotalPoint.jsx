import React from "react";
function TotalPoint() {
  return (
    <>
      <div className='box-total-point'>
        <div className='point'>
          <div className='week-point'>
            <div>Sao tuần</div>
            <div className='number-star'>
              <span>
                <i className='fa-solid fa-star'></i>
              </span>
              2.000
            </div>
          </div>
          <div className='month-point'>
            <div>Sao tháng</div>
            <div className='number-star'>
              <span>
                <i className='fa-solid fa-star'></i>
              </span>
              12.000
            </div>
          </div>
        </div>
        
        <div className='link-dashboard'>
          Bảng thống kê
          <button className='btn-link-dashboard'>
            <i className='fa-solid fa-arrow-up-right-from-square'></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default TotalPoint;
