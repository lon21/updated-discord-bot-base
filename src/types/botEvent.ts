export default interface botEvent {
	block?: boolean;
	run: () => {};
}