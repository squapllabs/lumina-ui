import React, { useEffect, useState } from "react";
import FirstPageIcon from "../../icons/FirstPageIcon";
import LastPageIcon from "../../icons/LastPageIcon";
import NextPage from "../../icons/NextPageIcon";
import PreviousPage from "../../icons/PreviousPageIcon";
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
    return () => {
      
    }
  }, [pageLimitStartCount, pageLimitEndCount]);

  const container: React.CSSProperties = {
    border: "1px solid #fff",
    width:'100%',
    padding: "8px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    height: "40px"
  };

  const navigateIcon: React.CSSProperties = {
    display:'flex',
    gap:'10px',
    alignItems:'center',
    cursor:'pointer',
    pointerEvents: currentPage === 1 ? "none"  : undefined
   };

   const navigateIconLast: React.CSSProperties = {
    display:'flex',
    gap:'10px',
    alignItems:'center',
    cursor:'pointer',
    pointerEvents: currentPage === totalPages ? "none" : undefined
   };
   const numberCount: React.CSSProperties = {
    display:'flex',
    flexDirection:'row',
    gap:'20px',
    alignItems:'center',
   };

   const selected: React.CSSProperties = {
    borderRadius:'50%',
    backgroundColor:'#c2c4c5',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight:'500',
    color:'#7F56D9!important'
   };

   const menu_item: React.CSSProperties = {
    borderRadius:'8px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight:'500',
   };
   const menu_items: React.CSSProperties = {
    borderRadius:'8px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    overflow:'hidden',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight:'500',
    color:'#667085!important'
   };

  return (
    <div style={container}>
      <div
      style={navigateIcon}
        onClick={() => {
          setMode("Prev");
          handlePageChangeDecrement(currentPage - 1);
        }}
      >
        <FirstPageIcon disabled={currentPage === 1} width={20} height={20} />
        <span style={{ color: "#667085", fontSize: "14px", fontWeight: "400" }}>
          Previous
        </span>
      </div>
      <div>
        <div style={numberCount}>
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
                  <div style={currentPage === value ? { ...menu_item, ...selected } : menu_items}
                    onClick={() => {
                      handleClickChange(value);
                    }}
                  >
                    <div>{value}</div>
                  </div>
                </div>
              );
            }
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
       style={navigateIconLast}
        onClick={() => {
          setMode("Next");
          handlePageChange(currentPage + 1);
        }}
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
