const index = {
    init: function () {
        const _this = this; // function의 this는 자기가 속한 object를 가리킴. 여기선 const index 객체.
                            // arrow function의 this는 parent의 this를 capture 해옴.
                            // 만약 init이  function이 아니라 arrow function 이었다면 아래코드가 동작하지 않음.
                            // init의 parent의 this는 global(window)이니까.
        $('#btn-save').on('click', () => {
            _this.save(); // this.save() 해도 동작함.
        });
        $('#btn-update').on('click',  () => {
            _this.update();
        });
        $('#btn-delete').on('click', function () {
            _this.delete();
        });
    },
    save: function () {
        const data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
        };

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(() => {
            alert('글이 등록되었습니다.');
            window.location.href = '/';
        }).fail((error) => alert(JSON.stringify(error)));
    },
    update: function () {
        const data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        const id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/posts/' + id,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(() => {
            alert('글이 수정되었습니다.');
            window.location.href = '/';
        }).fail((error) => alert(JSON.stringify(error)));
    },
    delete: function () {
        const id = $('#id').val();

        $.ajax({
            type: 'DELETE',
            url: '/api/v1/posts/' + id,
            dataType: 'json',
            contentType: 'applicatin/json; charset=utf-8'
        }).done(() => {
            alert('글이 삭제되었습니다.');
            window.location.href = '/';
        }).fail((error) => alert(JSON.stringify(error)));
    },
};

index.init();
