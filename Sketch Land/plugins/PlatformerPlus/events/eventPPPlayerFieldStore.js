const id = "PT_EVENT_PP_PLAYER_FIELD_STORE";
const groups = ["Platformer Plus", "Player Fields", "EVENT_GROUP_VARIABLES"];
const name = "Store (Platformer+) Player Field In Variable";

const fields = [
  {
    key: "field",
    label: "Field",
    type: "select",
    defaultValue: "dashing",
    options: [
      ["walled", "The player is on a wall"],
      ["dashing", "The player is dashing"],
      ["jumping", "The player is jumping"],
    ],
  },
  {
    key: "variable",
    type: "variable",
    defaultValue: "LAST_VARIABLE",
  },
];

const compile = (input, helpers) => {
  const { appendRaw, getVariableAlias, _addComment } = helpers;

  const fieldVarTypeLookup = {
    walled: "UINT8",
    dashing: "UINT8",
    jumping: "UINT8",
  };

  const fieldName = `_${input.field}`;
  const variableAlias = getVariableAlias(input.variable);

  _addComment("Store player field in variable");
  appendRaw(
    `VM_GET_${fieldVarTypeLookup[input.field]} ${variableAlias}, ${fieldName}`
  );
};

module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
  allowedBeforeInitFade: true,
};
