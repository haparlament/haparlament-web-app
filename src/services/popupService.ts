export function createPromise() {
    let resolver = (data: any) => data;
    let rejector = (data: any) => data;
    const promise = new Promise((_resolver, _rejector) => {
      resolver = _resolver;
      rejector = _rejector;
    });
    return {
      resolver,
      promise,
      rejector,
    };
}

function PopupService(dispatch ) {
    let _resolver: (msg: any) => void
    return {
        openPopup: () => {
            const { resolver, promise } = createPromise();
            _resolver = resolver
            // open the popup
            // dispatch
            return promise
        },
        closePopup: (dispatch, {success, value}: {success: boolean, value: any}) => {
            // close Popup
            _resolver({success, value});
    
        }
    }
}