import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Monokoily Reward", value: 150, color: "#bb39ff" },
  { name: "Future Development", value: 100, color: "#cc23bc" },
  { name: "Web3SOC Reward", value: 500, color: "#be80ff" },

  { name: "VC", value: 80, color: "#ce215f" },

  { name: "Private Sales", value: 50, color: "#e05314" },
  { name: "Team", value: 50, color: "#f78a11" },
  { name: "LP", value: 50, color: "#ffbc64" },
  { name: "Advisor", value: 20, color: "#ffc89f" },
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={`white`}
        style={{ fontWeight: 700, fontSize: "48px" }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text x={cx} y={cy} dy={30} textAnchor="middle" fill={`white`}>
        {payload.name}
      </text>

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={`${payload?.color}`}
      />
      {/* <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={`${payload?.color}`}
      /> */}
      {/* <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={`${payload?.color}`}
        fill="none"
      /> */}
      {/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" /> */}
      {/* <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${props?.name}`}</text> */}
      {/* <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text> */}
    </g>
  );
};

const COLORS = [
  "#bb39ff",
  "#cc23bc",
  "#be80ff",

  "#ce215f",

  "#e05314",
  "#f78a11",
  "#ffbc64",
  "#ffc89f",
];

export default class Chart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si";

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_: any, index: any) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      // <ResponsiveContainer width="100%" height="100%">
      <PieChart width={500} height={500}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={130}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      // </ResponsiveContainer>
    );
  }
}
