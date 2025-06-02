import React from "react";
import PropTypes from "prop-types";

const PriceComponent = ({ headers, rows, caption, className }) => {
  return (
    <section>
      <div
        className={`w-full  sm:h-[50vh] flex flex-col items-center mt-10 ${className}`}
      >
        {caption && (
          <h1 className="text-4xl sm:5xl mb-4 font-bold">{caption}</h1>
        )}
        <p className="py-4 sm:py-6 sm:text-base text-center text-red-500">
          *All of the below prices includes trainers, fully customized workout
          plan, nurtition plan and showers facility also.
        </p>
        <div className=" px-10 w-full overflow-x-hidden">
          <table className="table-auto border-4 border-gr-500 w-full text-sm sm:text-base ">
            <thead>
              <tr className="table-fixed border-4 border-gray-300 ">
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className=" text-xl table-fixed border-4 border-gray-300 p-4"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="table-fixed border-4 border-gray-300"
                >
                  {Object.values(row).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="table-fixed border-4 border-gray-300 p-4"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

PriceComponent.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  caption: PropTypes.string,
  className: PropTypes.string,
};

PriceComponent.defaultProps = {
  caption: null,
  className: "",
};

export default PriceComponent;
