import React, { useEffect, useState } from "react";
import FirstPageIcon from "../../icons/FirstPageIcon";
import LastPageIcon from "../../icons/LastPageIcon";
import NextPage from "../../icons/NextPageIcon";
import PreviousPage from "../../icons/PreviousPageIcon";
import Styles from "./CustomPagination.module.scss";
import ProtoTypes from "prop-types";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [pageLimitStartCount, setPageLimitStartCount] = useState<any>(1);
  const [pageLimitEndCount, setPageLimitEndCount] = useState<any>(5);
  const [mode, setMode] = useState<any>();
  const numbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (page: number) => {
    onPageChange(page);
    if (currentPage % 5 === 0) {
      setPageLimitStartCount(pageLimitStartCount + 5);
      setPageLimitEndCount(pageLimitEndCount + 5);
    }
  };
  const handlePageChangeDecrement = (page: number) => {
    onPageChange(page);
    if (currentPage % 5 === 1) {
      setPageLimitStartCount(pageLimitStartCount - 5);
      setPageLimitEndCount(pageLimitEndCount - 5);
    }
  };

  const handleClickChange = (page: number) => {
    onPageChange(page);
  };

  useEffect(() => {
    if (mode === "Prev") {
      onPageChange(pageLimitEndCount);
    } else {
      onPageChange(pageLimitStartCount);
    }
    return () => {};
  }, [pageLimitStartCount, pageLimitEndCount]);

  return (
    <div className={Styles.container}>
      <div
        className={Styles.navigateIcon}
        onClick={() => {
          setMode("Prev");
          handlePageChangeDecrement(currentPage - 1);
        }}
        style={{ pointerEvents: currentPage === 1 ? "none" : undefined }}
      >
        <FirstPageIcon disabled={currentPage === 1} width={20} height={20} />
        <span style={{ color: "#667085", fontSize: "14px", fontWeight: "400" }}>
          Previous
        </span>
      </div>
      <div>
        <div className={Styles.numberCount}>
          <div>
            <PreviousPage
              width={10}
              height={10}
              onClick={() => {
                setMode("Prev");
                setPageLimitStartCount(pageLimitStartCount - 5);
                setPageLimitEndCount(pageLimitEndCount - 5);
              }}
              disabled={pageLimitStartCount <= numbers[0]}
            />
          </div>
          {numbers?.map((value: any, index: any) => {
            if (
              Number(value) >= Number(pageLimitStartCount) &&
              Number(value) <= Number(pageLimitEndCount)
            ) {
              return (
                <div key={index}>
                  <div
                    className={
                      currentPage === value
                        ? `${Styles.menu_item} ${Styles.selected}`
                        : `${Styles.menu_items}`
                    }
                    onClick={() => {
                      handleClickChange(value);
                    }}
                  >
                    <div>{value}</div>
                  </div>
                </div>
              );
            }
            return null;
          })}
          <div
            style={{
              pointerEvents: pageLimitEndCount >= totalPages ? "none" : undefined,
            }}
          >
            <NextPage
              width={10}
              height={10}
              onClick={() => {
                setMode("Next");
                setPageLimitStartCount(pageLimitStartCount + 5);
                setPageLimitEndCount(pageLimitEndCount + 5);
              }}
              disabled={pageLimitEndCount >= totalPages}
            />
          </div>
        </div>
      </div>

      <div
        className={Styles.navigateIcon}
        onClick={() => {
          setMode("Next");
          handlePageChange(currentPage + 1);
        }}
        style={{ pointerEvents: currentPage === totalPages ? "none" : undefined }}
      >
        <span style={{ color: "#667085", fontSize: "14px", fontWeight: "400" }}>
          Next
        </span>
        <LastPageIcon
          disabled={currentPage === totalPages}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default CustomPagination;

CustomPagination.propTypes = {
  currentPage: ProtoTypes.number.isRequired,
  totalPages: ProtoTypes.number.isRequired,
  onPageChange: ProtoTypes.func.isRequired,
};
