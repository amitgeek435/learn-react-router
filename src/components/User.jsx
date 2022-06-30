import { useHistory, useLocation, useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

// const User1 = ({ match }) => {
//   useParams(false);
//   return (
//     <>
//       <h1 className="text-center">Hello User 🧑‍🏭 {match.params.name}.</h1>
//     </>
//   );
// };
const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();
  //   console.log(location.pathname);
  console.log(history);
  return (
    <>
      <h2 className="h1 text-center">
        Hello User 🧑‍🏭 {fname} {lname}.
      </h2>
      {location.pathname === `/user/hello/hey` ? (
        <Button onClick={() => history.push("/contact")}>
          click me 👍 go Back
        </Button>
      ) : null}
    </>
  );
};
export default User;
