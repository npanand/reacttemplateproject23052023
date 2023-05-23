import React from "react";
import noData from "../../../assets/images/nodata.png";

const NoDataFound = () => {
   return(    
        <div className="row mt-5">
            <div className="col-lg-12 text-center">
                <img className="imgdata" src={noData} />
                <div className="noDataFound">Sorry, There is no data found
                </div>
            </div>
        </div>
   );
   
}
export default NoDataFound;