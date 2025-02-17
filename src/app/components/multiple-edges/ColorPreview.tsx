import { Handle, Position } from "@xyflow/react";

function ColorPreview() {
  const color = { r: 0, g: 0, b: 0 };

  return (
    <div
      className="node"
      style={{
        background: `rgb(${color.r}, ${color.g}, ${color.b})`,
      }}
    >
      <div>
        <Handle
          type="source"
          position={Position.Top}
          id="red"
          className="handle"
        />
        <label htmlFor="red" className="label">
          R
        </label>
      </div>
      <div>
        <Handle
          type="target"
          position={Position.Left}
          id="green"
          className="handle"
        />
        <label htmlFor="green" className="label">
          G
        </label>
      </div>
      <div>
        <Handle
          type="target"
          position={Position.Right}
          id="blue"
          className="handle"
        />
        <label htmlFor="red" className="label">
          B
        </label>
      </div>
      <div>
        <Handle
          type="source"
          position={Position.Bottom}
          id="custom"
          className="handle"
        />
        <label htmlFor="red" className="label"></label>
      </div>
    </div>
  );
}

export default ColorPreview;
