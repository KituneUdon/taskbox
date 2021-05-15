import React, { FC } from "react";

type Props = {
  task: {
    id: string;
    title: string;
    state: string;
  };
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

const Task: FC<Props> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
        ></span>

        <div className="actions" onClick={(event) => event.stopPropagation()}>
          {state !== "TASK_ARCHIVED" && (
            // eslint-disable-next-line
            <a onClick={() => onPinTask(id)}>
              <span className={`icon-star`} />
            </a>
          )}
        </div>
      </label>
    </div>
  );
};

export default Task;
