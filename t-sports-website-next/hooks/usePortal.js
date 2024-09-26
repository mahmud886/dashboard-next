import { useEffect, useRef } from 'react';

const usePortal = (id) => {
  const rootElemRef = useRef(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent || createContainer(id);

    parentElem.appendChild(rootElemRef.current);

    return function removeElement() {
      rootElemRef.current.remove();
      if (parentElem.childNodes.length === 0) {
        parentElem.remove();
      }
    };
  }, [id]);

  function createContainer(id) {
    const container = document.createElement('div');
    container.setAttribute('id', id);
    document.body.appendChild(container);
    return container;
  }

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  }

  return getRootElem();
};

export default usePortal;
