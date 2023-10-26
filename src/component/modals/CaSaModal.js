import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { btnModalRedux } from "store/reducers/btnModalReducer";
import { distRedux } from "store/reducers/distReducer";
import { Button, Item } from "semantic-ui-react";

export default function CaSaModal(props) {
  const btnModalReducer = useSelector((state) => state.btnModalReducer.btnModalReducer);
  const distReducer = useSelector((state) => state.distReducer.distReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      props.isModalPinComp ||
      props.isModalHoleComp ||
      props.isModalTeeComp ||
      props.isModalIpComp ||
      props.isModalBunkComp ||
      props.isModalAreaComp ||
      props.isModalDistComp
    ) {
      document.querySelector(".btnModalWrap").style.display = "flex";
    } else {
      document.querySelector(".btnModalWrap").style.display = "none";
    }
  });
  const onClick = (e, target, value) => {
    dispatch(btnModalRedux(value));
  };
  useEffect(() => {
    console.log(btnModalReducer);
  }, [btnModalReducer]);
  return (
    <Item
      className="btnModalWrap"
      style={{
        position: "absolute",
        bottom: "-1.3%",
        right: ".3%",
        width: "120px",
        display: "none",
        padding: "0",
        pointerEvents: "auto",
        zIndex: "1",
      }}
    >
      <Button
        style={{ width: "58px", fontSize: "12px", padding: "12px 12px" }}
        onClick={(e, target) => {
          onClick(e, target, "X");
        }}
      >
        취소
      </Button>
      <Button
        className="blue"
        style={{ width: "58px", fontSize: "12px", padding: "12px 12px", marginRight: "0", color: "rgba(3,3,3,0.5)" }}
        onClick={(e, target) => {
          onClick(e, target, "S");
        }}
      >
        저장
      </Button>

      {props.isModalDistComp ? (
        <Button
          style={{ position: "absolute", top: "-40px", width: "120px" }}
          className={distReducer === "F" ? "yellow" : "green"}
          onClick={() => {
            if (distReducer === "F") dispatch(distRedux("B"));
            else dispatch(distRedux("F"));
          }}
        >
          {distReducer === "F" ? "front" : "back"}
        </Button>
      ) : (
        ""
      )}
    </Item>
  );
}
