<template>
    <div>
        <b-modal id="bv-modal-example" hide-footer>
            <template v-slot:modal-title>
                Условия политики сайта.
            </template>
            <div class="d-block text-center">
                <p>
                </p>
            </div>
            <b-button class="mt-3 btn botton--green" block @click="$bvModal.hide('bv-modal-example')">Закрыть</b-button>
        </b-modal>
    </div>
</template>