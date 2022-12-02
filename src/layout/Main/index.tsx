import style from "./index.module.less";
import { Select } from "antd";
import { MultipleContainers } from "../../MultipleContainer/MultipleContainers";
import { items } from "../../data";
const Main = () => {
  return (
    <div className={style["container"]}>
      <div className={style["header"]}>
        <h2 className={style["title"]}>Board</h2>
        <Select bordered={false} defaultValue="week" className={style.select}>
          <Select.Option value="week">This Week</Select.Option>
        </Select>
      </div>
      <div className={style["content"]}>
        <MultipleContainers items={items} />
      </div>
    </div>
  );
};

export default Main;
