import {
  ArrowUpRight
} from "lucide-react";

import RouteLink from "./RouteLink";


function Button({
  href,
  children,
  type = "primary",
  showIcon = true,
  onClick,
  className = ""
}) {

  const classes = [
    "button",
    type === "secondary"
      ? "button-secondary"
      : "",
    className
  ]
    .filter(Boolean)
    .join(" ");


  if (href) {

    if (href.includes("#")) {

      return (
        <RouteLink
          to={href}
          className={classes}
        >
          {children}

          {showIcon && (
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
            />
          )}
        </RouteLink>
      );

    }


    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
      >
        {children}

        {showIcon && (
          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
          />
        )}
      </a>
    );

  }


  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
    >
      {children}

      {showIcon && (
        <ArrowUpRight
          size={14}
          strokeWidth={1.5}
        />
      )}
    </button>
  );
}


export default Button;