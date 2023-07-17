const a = { value: 'a', next: () => b };
const b = { value: 'b', next: () => c };
const c = { value: 'c', next: () => d };
const d = { value: 'c', next: () => e };
const e = { value: 'c', next: () => f };
const f = { value: 'c', next: () => d };

module.exports = {
  linkedListWithCycle: a,
};
