import {
  useNavigate
} from "react-router-dom";


function RouteLink({
  to,
  children,
  className = "",
  onClick
}) {

  const navigate = useNavigate();


  const handleClick = (event) => {

    if (onClick) {
      onClick(event);
    }


    if (!to.includes("#")) {
      return;
    }


    event.preventDefault();


    const [
      path,
      hash
    ] = to.split("#");


    if (
      path &&
      window.location.pathname !== path
    ) {

      navigate(path);

      window.setTimeout(() => {

        const element =
          document.getElementById(hash);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }

      }, 150);

      return;
    }


    const element =
      document.getElementById(hash);


    if (element) {

      element.scrollIntoView({
        behavior: "smooth"
      });

    }

  };


  return (
    <a
      href={to}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}


export default RouteLink;