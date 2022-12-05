import CustomButton from "./CustomButton";

function User(props) {
  return (
    <div className="squareStyle">
      {/* props로 받은 age와 name을 가져다 씀 */}
      {props.user.age}살 - {props.user.name}
      <CustomButton
        color="red"
        onClick={() => {
          props.handleDelete(props.user.id);
        }}
      >
        삭제하기
      </CustomButton>
    </div>
  );
}

export default User;
