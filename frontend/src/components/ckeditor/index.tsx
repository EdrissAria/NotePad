import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CkEditor() {
    return (
        <CKEditor
            editor={ClassicEditor}
            data=""
            onReady={(editor: ClassicEditor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
            }}
            onChange={(event: Event, editor: ClassicEditor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
            }}
            onBlur={(event: Event, editor: ClassicEditor) => {
                console.log('Blur.', editor);
            }}
            onFocus={(event: Event, editor: ClassicEditor) => {
                console.log('Focus.', editor);
            }}
        />
    )
}

export default CkEditor