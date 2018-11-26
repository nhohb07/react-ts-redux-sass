export interface RequestState {
  isLoading: boolean,
  hideSpinner: boolean,
  type?: string,
}

export interface RequestActions {
  start(hideSpinner?: boolean): void,
  end(): void,
}