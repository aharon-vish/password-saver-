package com.saveyourpassword;

import android.text.InputType;
import android.text.Spannable;
import android.util.TypedValue;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.ViewDefaults;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.views.text.ReactTextUpdate;
import com.facebook.react.views.text.TextInlineImageSpan;
import com.facebook.react.views.textinput.ReactEditText;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;

import java.util.Map;

import javax.annotation.Nullable;

import static android.R.attr.start;
import static com.saveyourpassword.R.id.end;

@ReactModule(name = ReactTextInputManager.REACT_CLASS)
public class ReactTextInputManager extends BaseViewManager<ReactEditText, LayoutShadowNode> {

    protected static final String REACT_CLASS = "AndroidTextInput";
    private static final int FOCUS_TEXT_INPUT = 1;
    private static final int BLUR_TEXT_INPUT = 2;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public Class<? extends LayoutShadowNode> getShadowNodeClass() {
        return ReactTextInputShadowNode.class;
    }

    @Override
    public LayoutShadowNode createShadowNodeInstance() {
        return new ReactTextInputShadowNode();
    }
    @Override
    public void updateExtraData(ReactEditText view, Object extraData) {
        if (extraData instanceof ReactTextUpdate) {
            ReactTextUpdate update = (ReactTextUpdate) extraData;

            view.setPadding(
                    (int) update.getPaddingLeft(),
                    (int) update.getPaddingTop(),
                    (int) update.getPaddingRight(),
                    (int) update.getPaddingBottom());

            if (update.containsImages()) {
                Spannable spannable = update.getText();
                TextInlineImageSpan.possiblyUpdateInlineImageSpans(spannable, view);
            }
            view.maybeSetText(update);
        }
    }

    @Override
    public ReactEditText createViewInstance(ThemedReactContext context) {
        ReactEditText editText = new ReactEditText(context);
        int inputType = editText.getInputType();
        editText.setInputType(inputType & (~InputType.TYPE_TEXT_FLAG_MULTI_LINE));
        editText.setReturnKeyType("done");
        editText.setTextSize(
                TypedValue.COMPLEX_UNIT_PX,
                (int) Math.ceil(PixelUtil.toPixelFromSP(ViewDefaults.FONT_SIZE_SP)));
        return editText;
    }

    @Override
    public @Nullable
    Map<String, Integer> getCommandsMap() {
        return MapBuilder.of("focusTextInput", FOCUS_TEXT_INPUT, "blurTextInput", BLUR_TEXT_INPUT);
    }

    @Override
    public void receiveCommand(
            ReactEditText reactEditText,
            int commandId,
            @Nullable ReadableArray args) {
        switch (commandId) {
            case FOCUS_TEXT_INPUT:
                reactEditText.requestFocusFromJS();
        }
    }

    private class ReactSelectionWatcher  {

        private ReactEditText mReactEditText;
        private EventDispatcher mEventDispatcher;
        private int mPreviousSelectionStart;
        private int mPreviousSelectionEnd;

        public ReactSelectionWatcher(ReactEditText editText) {
            mReactEditText = editText;
            ReactContext reactContext = (ReactContext) editText.getContext();
            mEventDispatcher = reactContext.getNativeModule(UIManagerModule.class).getEventDispatcher();
        }

    public void onSelectionChanged(ReactEditText view) {
            // Android will call us back for both the SELECTION_START span and SELECTION_END span in text
            // To prevent double calling back into js we cache the result of the previous call and only
            // forward it on if we have new values

            if (mPreviousSelectionStart != start || mPreviousSelectionEnd != end) {
                mEventDispatcher.dispatchEvent(
                        new ReactTextInputSelectionEvent(
                                mReactEditText.getId(),
                                start,
                                end
                        ));

                mPreviousSelectionStart = start;
                mPreviousSelectionEnd = end;
            }
        }
    }

    class ReactTextInputSelectionEvent
            extends Event<ReactTextInputSelectionEvent> {

        private static final String EVENT_NAME = "topSelectionChange";

        private int mSelectionStart;
        private int mSelectionEnd;

        public ReactTextInputSelectionEvent(
                int viewId,
                int selectionStart,
                int selectionEnd) {
            super(viewId);
            mSelectionStart = selectionStart;
            mSelectionEnd = selectionEnd;
        }

        @Override
        public String getEventName() {
            return EVENT_NAME;
        }

        @Override
        public void dispatch(RCTEventEmitter rctEventEmitter) {
            rctEventEmitter.receiveEvent(getViewTag(), getEventName(), serializeEventData());
        }

        private WritableMap serializeEventData() {
            WritableMap eventData = Arguments.createMap();

            WritableMap selectionData = Arguments.createMap();
            selectionData.putInt("end", mSelectionEnd);
            selectionData.putInt("start", mSelectionStart);

            eventData.putMap("selection", selectionData);
            return eventData;
        }
    }
}